# 📊 Configuração Google Sheets API - Sorteios

## 🚀 Passo a passo completo

### 1. Criar projeto no Google Cloud Console
1. Acesse [Google Cloud Console](https://console.cloud.google.com)
2. Crie um novo projeto ou selecione um existente
3. Anote o **Project ID**

### 2. Ativar Google Sheets API
1. No menu lateral: **APIs & Services** → **Library**
2. Busque por "Google Sheets API"
3. Clique em **Enable**

### 3. Criar Service Account
1. **APIs & Services** → **Credentials**
2. **Create Credentials** → **Service Account**
3. Preencha o nome (ex: "sorteios-service")
4. Clique em **Create and Continue**
5. **Done**

### 4. Baixar credenciais JSON
1. Na lista de Service Accounts, clique na que você criou
2. **Keys** → **Add Key** → **Create new key**
3. Selecione **JSON** e clique **Create**
4. Baixe o arquivo JSON

### 5. Criar planilha no Google Sheets
1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Renomeie para "**Sorteios Dan Vitoriano**"
4. Na primeira aba, renomeie para "**Sorteios**"
5. Adicione os cabeçalhos na primeira linha:
   - A1: Data/Hora
   - B1: Nome
   - C1: Email
   - D1: Telefone
   - E1: CPF
   - F1: Empresa
   - G1: Cargo
   - H1: Gênero
   - I1: Evento
   - J1: Origem

### 6. Compartilhar planilha com Service Account
1. Na planilha, clique em **Compartilhar**
2. Adicione o email da Service Account (está no JSON baixado)
3. Permissão: **Editor**
4. **Enviar**

### 7. Obter ID da planilha
1. Na URL da planilha: `https://docs.google.com/spreadsheets/d/ID_DA_PLANILHA/edit`
2. Copie o **ID_DA_PLANILHA**

### 8. Configurar variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto com:

```bash
# Google Sheets API Configuration
GOOGLE_PROJECT_ID=seu_project_id_do_json
GOOGLE_PRIVATE_KEY_ID=private_key_id_do_json
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nprivate_key_do_json\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=client_email_do_json
GOOGLE_CLIENT_ID=client_id_do_json
GOOGLE_CLIENT_X509_CERT_URL=client_x509_cert_url_do_json
GOOGLE_SPREADSHEET_ID=id_da_sua_planilha
```

### 9. Mapear dados do arquivo JSON
Abra o arquivo JSON baixado e encontre os valores:

```json
{
  "type": "service_account",
  "project_id": "COPIE_PARA_GOOGLE_PROJECT_ID",
  "private_key_id": "COPIE_PARA_GOOGLE_PRIVATE_KEY_ID",
  "private_key": "COPIE_PARA_GOOGLE_PRIVATE_KEY",
  "client_email": "COPIE_PARA_GOOGLE_CLIENT_EMAIL",
  "client_id": "COPIE_PARA_GOOGLE_CLIENT_ID",
  "client_x509_cert_url": "COPIE_PARA_GOOGLE_CLIENT_X509_CERT_URL"
}
```

### 10. Reiniciar servidor
```bash
npm run dev
```

## ✅ Teste
1. Acesse `/sorteios`
2. Preencha o formulário
3. Verifique se os dados apareceram na planilha

## 🔧 Troubleshooting

### Erro de autenticação
- Verifique se todas as variáveis estão no `.env.local`
- Confirme que a planilha está compartilhada com a Service Account

### Erro de permissão
- A Service Account precisa ter permissão de **Editor** na planilha

### Erro de PRIVATE_KEY
- Certifique-se de incluir `\n` nos quebras de linha
- Use aspas duplas na variável

## 📝 Estrutura da planilha
Os dados serão salvos nesta ordem:
- **Coluna A:** Data e hora do cadastro
- **Coluna B:** Nome completo
- **Coluna C:** Email
- **Coluna D:** Telefone
- **Coluna E:** CPF
- **Coluna F:** Empresa
- **Coluna G:** Cargo
- **Coluna H:** Gênero
- **Coluna I:** Evento (codecon, programaria, wnf)
- **Coluna J:** Origem ("Sorteios Website") 