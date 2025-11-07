"use client"

import type React from "react"
import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ArrowLeft } from "lucide-react"
import { Button } from "./ui/button"

interface PrivacyPolicyPageProps {
  language: "en" | "de"
  onBack: () => void
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ language, onBack }) => {
  const content = {
    en: {
      title: "Privacy Policy",
      subtitle: "Data Protection Information",
      introTitle: "Introduction",
      dataCollectionTitle: "Data Collection",
      dataUsageTitle: "Use of Data",
      cookiesTitle: "Cookies",
      rightsTitle: "Your Rights",
      contactTitle: "Contact",
      backButton: "Back",
      lastUpdated: "Last updated: January 2025",
    },
    de: {
      title: "Datenschutzerklärung",
      subtitle: "Datenschutzinformationen",
      introTitle: "Einleitung",
      dataCollectionTitle: "Datenerhebung",
      dataUsageTitle: "Datenverwendung",
      cookiesTitle: "Cookies",
      rightsTitle: "Ihre Rechte",
      contactTitle: "Kontakt",
      backButton: "Zurück",
      lastUpdated: "Zuletzt aktualisiert: Januar 2025",
    },
  }

  const t = content[language]

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Button variant="ghost" onClick={onBack} className="mb-6 p-0 h-auto font-normal">
            <ArrowLeft size={16} className="mr-2" />
            {t.backButton}
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl mb-4">{t.title}</h1>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
            <p className="text-sm text-muted-foreground mt-2">{t.lastUpdated}</p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>{t.introTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground">
                  {language === "de" ? (
                    <p>
                      Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten
                      daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen
                      Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im
                      Rahmen unserer Website.
                    </p>
                  ) : (
                    <p>
                      The protection of your personal data is a special concern to us. We therefore process your data
                      exclusively on the basis of legal provisions (GDPR, TKG 2003). In this privacy information, we
                      inform you about the most important aspects of data processing within our website.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle>{t.dataCollectionTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  {language === "de" ? (
                    <>
                      <p>
                        <strong>Kontaktdaten:</strong> Wenn Sie uns per Formular auf der Website oder per E-Mail
                        kontaktieren, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von
                        Anschlussfragen bei uns gespeichert.
                      </p>
                      <p>
                        <strong>Automatisch erhobene Daten:</strong> Beim Aufrufen unserer Website werden automatisch
                        Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa
                        die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres
                        Internet-Service-Providers und Ähnliches.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        <strong>Contact Data:</strong> If you contact us via form on the website or by email, your
                        provided data will be stored with us for the purpose of processing the request and in case of
                        follow-up questions.
                      </p>
                      <p>
                        <strong>Automatically Collected Data:</strong> When accessing our website, information of a
                        general nature is automatically collected. This information (server log files) includes the type
                        of web browser, operating system used, domain name of your internet service provider and
                        similar.
                      </p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card>
              <CardHeader>
                <CardTitle>{t.dataUsageTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  {language === "de" ? (
                    <>
                      <p>
                        Ihre personenbezogenen Daten werden ausschließlich zur Beantwortung Ihrer Anfragen und zur
                        Abwicklung von Verträgen verwendet. Eine Weitergabe an Dritte erfolgt nur, wenn dies zur
                        Vertragserfüllung erforderlich ist oder Sie ausdrücklich eingewilligt haben.
                      </p>
                      <p>
                        Die automatisch erfassten Daten dienen zur Verbesserung unserer Website und zur Gewährleistung
                        der Funktionalität. Eine Identifikation Ihrer Person ist uns über diese Daten nicht möglich.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Your personal data is used exclusively to answer your inquiries and to process contracts. Data
                        is only passed on to third parties if this is necessary for contract fulfillment or if you have
                        expressly consented.
                      </p>
                      <p>
                        The automatically collected data serves to improve our website and ensure functionality.
                        Identification of your person is not possible for us through this data.
                      </p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>{t.cookiesTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  {language === "de" ? (
                    <>
                      <p>
                        Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem
                        Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und
                        sicherer zu machen.
                      </p>
                      <p>
                        Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung von
                        selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese
                        selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unsere Website wiederzuerkennen.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Our website uses cookies. These are small text files that your web browser stores on your
                        device. Cookies help us make our offer more user-friendly, effective and secure.
                      </p>
                      <p>
                        Some cookies are "session cookies." Such cookies are automatically deleted after the end of your
                        browser session. However, other cookies remain on your device until you delete them yourself.
                        Such cookies help us recognize you when you return to our website.
                      </p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Rights */}
            <Card>
              <CardHeader>
                <CardTitle>{t.rightsTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  {language === "de" ? (
                    <>
                      <p>
                        Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
                        Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer
                        Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in
                        einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        You generally have the rights to information, correction, deletion, restriction, data
                        portability, revocation and objection. If you believe that the processing of your data violates
                        data protection law or your data protection rights have been violated in any other way, you can
                        file a complaint with the supervisory authority.
                      </p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>{t.contactTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground">
                  {language === "de" ? (
                    <p>
                      Sie erreichen uns unter folgenden Kontaktdaten:
                      <br />
                      <strong>Lumora Marketing</strong>
                      <br />
                      E-Mail: info@lumoramarketing.de
                      <br />
                      Telefon: +49 175 9438910
                    </p>
                  ) : (
                    <p>
                      You can reach us at the following contact details:
                      <br />
                      <strong>Lumora Marketing</strong>
                      <br />
                      E-Mail: info@lumoramarketing.de
                      <br />
                      Phone: +49 175 9438910
                    </p>
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
