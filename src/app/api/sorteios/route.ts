import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Configuração das credenciais do Google
const GOOGLE_CREDENTIALS = {
  type: "service_account",
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL
};

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID; // ID da sua planilha
const SHEET_NAME = 'Sorteios'; // Nome da aba na planilha



export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, cpf, empresa, cargo, genero, evento } = await request.json();

    // Validar dados
    if (!name || !email || !phone || !cpf || !empresa || !cargo || !genero || !evento) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Configurar autenticação do Google
    const auth = new google.auth.GoogleAuth({
      credentials: GOOGLE_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Dados para inserir na planilha
    const timestamp = new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    });

    const values = [
      [timestamp, name, email, phone, cpf, empresa, cargo, genero, evento, 'Sorteios Website']
    ];

    // Inserir dados na planilha
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:J`, // Colunas A até J
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: values,
      },
    });

    return NextResponse.json(
      { message: 'Dados salvos com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao salvar na planilha:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 