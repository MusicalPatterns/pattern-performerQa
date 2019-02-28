import { Material } from '@musical-patterns/compiler'
import { Id, Metadata, Patterns, StandardPattern } from '@musical-patterns/pattern'
import { buildEntities, buildScales } from './material'
import { specData } from './spec'

const material: Material = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: Metadata = {
    // tslint:disable-next-line max-line-length
    description: 'pattern for qa\'ing performer, since ears are strong and it\'s hard to automatically test that it still sounds good',
    formattedName: 'Performer QA',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-12-19T07:00:00.000Z',
    musicalIdeaIllustrated: 'assure quality of all the things!',
    originalPublish: '2018-12-19T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

const pattern: StandardPattern = {
    id: Id.PERFORMER_QA,
    material,
    metadata,
    specData,
}

const patterns: Patterns = {
    [ pattern.id ]: pattern,
}

export {
    pattern,
    patterns,
}
