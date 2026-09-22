import { useEffect } from 'react'
import { setStructuredData, type JsonLdNode } from '../../utils/seo'

interface JsonLdProps {
  nodes: JsonLdNode[]
  /** Isolated slot id so the site graph and page graph coexist. */
  slot?: string
}

/**
 * Injects a `<script type="application/ld+json">` block into the document head.
 *
 * The JSON is created with `JSON.stringify` and assigned via `textContent`
 * (never `dangerouslySetInnerHTML`), so no HTML is parsed or executed. Any
 * block previously written for the same slot is removed first, which keeps
 * navigation from accumulating duplicate structured data.
 */
export function JsonLd({ nodes, slot = 'page' }: JsonLdProps) {
  // Serialising gives a stable, comparable dependency for array props.
  const payload = JSON.stringify(nodes)

  useEffect(() => {
    setStructuredData(JSON.parse(payload) as JsonLdNode[], slot)
    return () => {
      setStructuredData([], slot)
    }
  }, [payload, slot])

  return null
}
