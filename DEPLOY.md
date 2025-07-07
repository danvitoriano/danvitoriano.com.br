# 🚀 Deploy e Configuração de Produção

## 📋 **Checklist de Deploy**

### ✅ **Antes do Commit**
- [ ] Arquivo `.env.local` não commitado (verificar `.gitignore`)
- [ ] Credenciais seguras guardadas em local seguro
- [ ] Documentação atualizada

### ✅ **Configuração na Plataforma**

#### **Vercel (Recomendado)**
1. Deploy: `vercel --prod`
2. Dashboard → Project → Settings → Environment Variables
3. Adicionar as 7 variáveis obrigatórias:

```bash
GOOGLE_PROJECT_ID
GOOGLE_PRIVATE_KEY_ID  
GOOGLE_PRIVATE_KEY
GOOGLE_CLIENT_EMAIL
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_X509_CERT_URL
GOOGLE_SPREADSHEET_ID
```

#### **Netlify**
1. Site Settings → Environment Variables
2. Add variable → Preencher uma por uma
3. Deploy: `netlify deploy --prod`

#### **Railway**
1. Connect GitHub repo
2. Variables → Add 7 environment variables
3. Deploy automático

## 🔐 **Segurança**

### **❌ NUNCA faça:**
```bash
git add .env.local        # ❌ NUNCA!
git commit -m "add env"   # ❌ PERIGOSO!
```

### **✅ SEMPRE faça:**
```bash
# Verificar antes do commit
git status
# Confirmar que .env.local não aparece

# Commit seguro
git add .
git commit -m "feat: add sorteios form with Google Sheets integration"
```

## 🧪 **Testar em Produção**

### **1. Verificar API**
```bash
curl -X POST https://seu-site.vercel.app/api/sorteios \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","email":"test@example.com","phone":"11999999999","cpf":"123.456.789-00","empresa":"Test","cargo":"Dev","genero":"masculino","evento":"codecon"}'
```

### **2. Verificar Planilha**
- Acessar Google Sheets
- Confirmar que dados aparecem
- Testar diferentes eventos

## 🔄 **Workflow Recomendado**

### **Para novos desenvolvedores:**
1. Clone o repositório
2. `cp env.example .env.local`
3. Seguir `GOOGLE_SHEETS_SETUP.md`
4. Configurar credenciais locais
5. `npm run dev`

### **Para deploy:**
1. Testar localmente
2. Commit (sem .env.local)
3. Configurar variáveis na plataforma
4. Deploy
5. Testar em produção

## 🚨 **Troubleshooting**

### **Erro: "Credenciais não encontradas"**
- Verificar se todas as 7 variáveis estão configuradas
- Confirmar que não há espaços extras nos valores
- Verificar se PRIVATE_KEY inclui `\n`

### **Erro: "Planilha não encontrada"**
- Verificar GOOGLE_SPREADSHEET_ID correto
- Confirmar compartilhamento com Service Account
- Verificar se planilha existe

### **Erro: "Permission denied"**
- Service Account precisa de permissão "Editor"
- API Google Sheets precisa estar habilitada
- Verificar se projeto está ativo

## 📊 **Monitoramento**

### **Logs importantes:**
- Vercel Functions Logs
- Google Cloud Console Logs
- Planilha: última atualização

### **Métricas a acompanhar:**
- Taxa de conversão do formulário
- Erros de API
- Performance da planilha 