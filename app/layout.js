import './globals.css'

export const metadata = {
  title: 'Pro Elétrica STM | Elétrica, Energia Solar e CFTV',
  description:
    'Mais de 10 anos de experiência em elétrica residencial, energia solar, CFTV e segurança eletrônica.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#050505" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.tailwind = window.tailwind || {};
              window.tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      proYellow: '#facc15',
                      proDark: '#050505',
                      proCard: '#0d0d0d'
                    },
                    boxShadow: {
                      glow: '0 0 40px rgba(250,204,21,.22)'
                    }
                  }
                }
              }
            `,
          }}
        />

        <script src="https://cdn.tailwindcss.com"></script>
      </head>

      <body>{children}</body>
    </html>
  )
}
