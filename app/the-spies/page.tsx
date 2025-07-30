"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export default function TheSpiesLaunch() {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <img
          src="/TheSpies.jpg"
          alt="Capa The Spies"
          className="w-64 h-64 rounded-full shadow-xl mb-6 object-cover"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-2">MAKYNETA</h1>
        <h2 className="text-2xl italic mb-4">"The Spies"</h2>
        <Button size="lg" onClick={() => setShowPlayer(!showPlayer)}>
          {showPlayer ? "Pausar" : "Ouvir agora"}
        </Button>
        {showPlayer && (
          <audio controls autoPlay className="mt-6">
            <source src="/TheSpies.mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio embutido.
          </audio>
        )}
      </section>

      <section className="max-w-2xl mx-auto px-6 py-12 leading-relaxed text-lg">
        <h3 className="text-2xl font-semibold mb-4 text-center">Letra</h3>
        <p className="whitespace-pre-line">
          I awake to find no peace of mind{"\n"}
          I said, “How do you live as a fugitive{"\n"}
          Down here where I cannot see so clear?”{"\n"}
          I said, “What do I know{"\n"}
          Show me the right way to go”{"\n\n"}
          And the spies came out of the water{"\n"}
          But you’re feeling so bad ’cause you know{"\n"}
          That the spies hide out in every corner{"\n"}
          But you can’t touch them no{"\n"}
          ‘Cause they’re all spies{"\n"}
          ...
        </p>
      </section>

      <section className="bg-gray-900 py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Sobre mim</h3>
          <p className="text-gray-300 mb-6">
            Sou desenvolvedor fullstack apaixonado por música e tecnologia. Este projeto integra minha arte com minhas habilidades técnicas.
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:seuemail@example.com"><Mail className="w-6 h-6 text-white" /></a>
            <a href="https://github.com/seuusuario" target="_blank"><Github className="w-6 h-6 text-white" /></a>
            <a href="https://linkedin.com/in/seuusuario" target="_blank"><Linkedin className="w-6 h-6 text-white" /></a>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent>
              <h4 className="text-xl font-semibold mb-2">Stack usada</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Next.js</li>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>ShadCN UI</li>
                <li>Vercel</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h4 className="text-xl font-semibold mb-2">Este Projeto</h4>
              <p className="text-gray-300">
                Página de lançamento de single integrada ao meu portfólio como desenvolvedor fullstack. Design responsivo e funcional.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
