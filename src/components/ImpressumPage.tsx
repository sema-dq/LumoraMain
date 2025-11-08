"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ArrowLeft } from "lucide-react"
import { Button } from "./ui/button"

interface ImpressumPageProps {
  language: "en" | "de"
  onBack: () => void
}

export const ImpressumPage: React.FC<ImpressumPageProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: "Legal Notice",
      subtitle: "Impressum",
      companyTitle: "Company Information",
      contactTitle: "Contact Information",
      responsibilityTitle: "Content Responsibility",
      disclaimerTitle: "Disclaimer",
      backButton: "Back",
    },
    de: {
      title: "Impressum",
      subtitle: "Rechtliche Hinweise",
      companyTitle: "Firmeninformationen",
      contactTitle: "Kontaktinformationen",
      responsibilityTitle: "Verantwortlich für den Inhalt",
      disclaimerTitle: "Haftungsausschluss",
      backButton: "Zurück",
    },
  }

  const t = content[language]

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button variant="ghost" onClick={onBack} className="mb-6 p-0 h-auto font-normal">
            <ArrowLeft size={16} className="mr-2" />
            {t.backButton}
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl mb-4">{t.title}</h1>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>

          <div className="space-y-8">
            {/* Company Information */}
            <Card>
              <CardHeader>
                <CardTitle>{t.companyTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <strong>Lumora UG (haftungsbeschränkt)</strong>
                  <br />
                  Stiftstrasse 2, 79618 Rheinfelden, Deutschland
                  <br />
                  Registergericht: <span className="text-muted-foreground">Freiburg i. Br.</span>
                  <br />
                  Registernummer: <span className="text-muted-foreground">HRB 999999</span>
                  <br />
                  Geschäftsführer: William Yan
                  <br />
                  Umsatzsteuer-Identifikationsnummer: <span className="text-muted-foreground">DE123456789</span>
                  <br />
                  Zuständige Aufsichtsbehörde:
                  <br />
                  Stadtverwaltung Rheinfelden, Kirchplatz 2, 79618 Rheinfelden, Deutschland
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>{t.contactTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <strong>E-Mail:</strong> info@lumoramarketing.de
                  <br />
                  <strong>Telefon:</strong> +49 175 9438910
                </div>
              </CardContent>
            </Card>

            {/* Content Responsibility */}
            <Card>
              <CardHeader>
                <CardTitle>{t.responsibilityTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                {language === "de" ? (
                  <p>
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                    <br />
                    William Yan
                    <br />
                    Simon Gwangwaa
                    <br />
                    Robin Kuti
                    <br />
                    Lumora UG (haftungsbeschränkt)
                    <br />
                    E-Mail: info@lumoramarketing.de
                  </p>
                ) : (
                  <p>
                    Responsible for content according to § 55 Abs. 2 RStV:
                    <br />
                    William Yan
                    <br />
                    Simon Gwangwaa
                    <br />
                    Robin Kuti
                    <br />
                    Lumora UG (haftungsbeschränkt)
                    <br />
                    E-Mail: info@lumoramarketing.de
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card>
              <CardHeader>
                <CardTitle>{t.disclaimerTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-muted-foreground">
                  {language === "de" ? (
                    <>
                      <p>
                        <strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                        Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                        die auf eine rechtswidrige Tätigkeit hinweisen.
                      </p>
                      <p>
                        <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter,
                        auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                      </p>
                      <p>
                        <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        <strong>Liability for Content:</strong> As service providers, we are liable for our own content
                        on these pages in accordance with general laws according to Section 7, Paragraph 1 of the TMG.
                        However, pursuant to sections 8 to 10 of the TMG, we are not under obligation to monitor external information provided or stored on our website.
                      </p>
                      <p>
                        <strong>Liability for Links:</strong> Our offer contains links to external websites of third
                        parties on whose contents we have no influence. Therefore, we cannot assume any liability for
                        these external contents. The respective provider or operator of the linked pages is always
                        responsible for the contents of the linked pages.
                      </p>
                      <p>
                        <strong>Copyright:</strong> The content and works created by the site operators on these pages
                        are subject to German copyright law. Duplication, processing, distribution, or any form of
                        commercialization of such material beyond the scope of the copyright law shall require the prior
                        written consent of its respective author or creator.
                      </p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
