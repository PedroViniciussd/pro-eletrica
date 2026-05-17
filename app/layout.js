import './globals.css'

export const metadata = {
  metadataBase: new URL('https://pro-eletrica.vercel.app'),

  title: {
    default: 'Pro Elétrica STM | Elétrica, Energia Solar e CFTV em Santarém',
    template: '%s | Pro Elétrica STM',
  },

  description:
    'Pro Elétrica STM: mais de 10 anos de experiência em elétrica residencial, energia solar, CFTV, alarmes e segurança eletrônica em Santarém - PA.',

  keywords: [
    'eletricista em Santarém',
    'eletricista residencial Santarém',
    'instalação elétrica Santarém',
    'CFTV Santarém',
    'câmeras de segurança Santarém',
    'energia solar Santarém',
    'segurança eletrônica Santarém',
    'Pro Elétrica STM',
  ],

  authors: [{ name: 'Pro Elétrica STM' }],
  creator: 'Kinkajou Dev',

  openGraph: {
    title: 'Pro Elétrica STM | Elétrica, Energia Solar e CFTV em Santarém',
    description:
      'Especialistas em elétrica residencial, energia solar, CFTV, alarmes e segurança eletrônica. Mais de 10 anos de experiência.',
    url: 'https://pro-eletrica.vercel.app',
    siteName: 'Pro Elétrica STM',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/assets/logo-pro-eletrica.png',
        width: 1200,
        height: 630,
        alt: 'Logo Pro Elétrica STM',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pro Elétrica STM | Elétrica, Energia Solar e CFTV',
    description:
      'Mais de 10 anos de experiência em elétrica residencial, energia solar, CFTV e segurança eletrônica.',
    images: ['/assets/logo-pro-eletrica.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#050505" />
        <link rel="icon" href="/assets/logo-pro-eletrica.png" />

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