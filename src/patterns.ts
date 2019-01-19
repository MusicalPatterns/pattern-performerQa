import { PatternMaterial } from '@musical-patterns/compiler'
import { PatternMetadata } from '@musical-patterns/pattern'
import { buildPatterns, PatternId, Patterns, StandardPattern } from '@musical-patterns/registry'
import { buildEntities, buildScales } from './materials'
import { specData } from './specs'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: PatternMetadata = {
    // tslint:disable-next-line:max-line-length
    description: 'pattern for qa\'ing performer, since ears are strong and it\'s hard to automatically test that it still sounds good',
    formattedName: 'Performer QA',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-12-19T07:00:00.000Z',
    musicalIdeaIllustrated: 'assure quality of all the things!',
    originalPublish: '2018-12-19T07:00:00.000Z',
}

const pattern: StandardPattern = {
    material,
    metadata,
    patternId: PatternId.PERFORMER_QA,
    specData,
}

const patterns: Patterns = buildPatterns({
    [ pattern.patternId ]: pattern,
})

export {
    pattern,
    patterns,
}
