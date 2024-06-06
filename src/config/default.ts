export default {
  port: process.env.PORT || 8080,
  DB_URI:
    process.env.DBURI ||
    'mongodb+srv://TopMuggle:CHOUdidi423@cluster0.2qsmdbz.mongodb.net/muggleDB?retryWrites=true&w=majority&appName=Cluster0',
  DB_USER: 'TopMuggle',
  DB_PASSWORD: 'CHOUdidi423',
  DB_ROLE: 'admin',
}
