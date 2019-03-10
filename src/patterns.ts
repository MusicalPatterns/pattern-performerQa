import { Material } from '@musical-patterns/compiler'
import { Id, Metadata, Patterns, StandardPattern } from '@musical-patterns/pattern'
import { materializeEntities, materializeScales } from './material'
import { data } from './spec'

const material: Material = {
    materializeEntities,
    materializeScales,
}

const metadata: Metadata = {
    description: `pattern for qa'ing the performer`,
    formattedName: 'Performer QA',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-12-19T07:00:00.000Z',
    musicalIdeaIllustrated: 'assure quality of all the things!',
    originalPublish: '2018-12-19T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

const pattern: StandardPattern = {
    data,
    id: Id.PERFORMER_QA,
    material,
    metadata,
}

const patterns: Partial<Patterns> = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
