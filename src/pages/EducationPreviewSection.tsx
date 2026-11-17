import React from 'react'
import { Link } from 'react-router'
import { Card } from '../components/Card'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { buttonClasses } from '../components/common/buttonStyles'
import { certifications } from '../data/certifications'
import { education, training } from '../data/education'

const yearRange = (startDate?: string, endDate?: string): string => {
  const startYear = startDate?.slice(0, 4)
  const endYear = endDate?.slice(0, 4)

  if (startYear && endYear) return `${startYear} – ${endYear}`
  return startYear ?? endYear ?? ''
}

export const EducationPreviewSection: React.FC = () => {
  const degree = education[0]
  const program = training[0]
  const certification = certifications[0]
  const degreeYears = degree ? yearRange(degree.startDate, degree.endDate) : ''
  const programYears = program ? yearRange(program.startDate, program.endDate) : ''

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Background"
            title="Education & certifications"
            subtitle="A brief preview of my formal education and professional training."
          />
        </RevealOnScroll>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {degree && (
            <RevealOnScroll delayMs={40}>
              <Card elevation="base" hover={false} className="h-full">
                <p className="badge-label mb-3 text-secondary">Education</p>
                <h3 className="font-display text-lg font-semibold text-on-surface">
                  {degree.degree}
                </h3>
                <p className="body-sm mt-2 text-on-surface-variant">{degree.institution}</p>
                {degreeYears && (
                  <p className="badge-label mt-4 text-primary">{degreeYears}</p>
                )}
              </Card>
            </RevealOnScroll>
          )}

          {program && (
            <RevealOnScroll delayMs={80}>
              <Card elevation="base" hover={false} className="h-full">
                <p className="badge-label mb-3 text-secondary">Professional training</p>
                <h3 className="font-display text-lg font-semibold text-on-surface">
                  {program.title}
                </h3>
                <p className="body-sm mt-2 text-on-surface-variant">{program.provider}</p>
                {programYears && (
                  <p className="badge-label mt-4 text-primary">{programYears}</p>
                )}
              </Card>
            </RevealOnScroll>
          )}

          {certification && (
            <RevealOnScroll delayMs={120}>
              <Card elevation="base" hover={false} className="h-full">
                <p className="badge-label mb-3 text-secondary">Certification</p>
                <h3 className="font-display text-lg font-semibold text-on-surface">
                  {certification.title}
                </h3>
                <p className="body-sm mt-2 text-on-surface-variant">{certification.issuer}</p>
                {certification.issueDate && (
                  <p className="badge-label mt-4 text-primary">
                    {certification.issueDate}
                  </p>
                )}
              </Card>
            </RevealOnScroll>
          )}
        </div>

        <RevealOnScroll delayMs={160}>
          <div className="mt-10 flex justify-center">
            <Link to="/education" className={buttonClasses('outline', 'md')}>
              View Education &amp; Certifications
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
