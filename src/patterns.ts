import { PatternMaterial } from '@musical-patterns/compiler'
import { PatternMetadata, PatternSpec } from '@musical-patterns/pattern'
import { Pattern, PatternId } from '@musical-patterns/registry'
import { PERFORMER_QA_PATTERN_DURATION_SCALAR, PERFORMER_QA_PATTERN_PITCH_SCALAR } from './constants'
import { buildEntities, buildScales } from './materials'

const material: PatternMaterial = {
    buildEntitiesFunction: buildEntities,
    buildScalesFunction: buildScales,
}

const metadata: PatternMetadata = {
    // tslint:disable-next-line:max-line-length
    description: 'pattern for qa\'ing performer, since ears are strong and it\'s hard to automatically test that it still sounds good',
    formattedName: 'Performer QA',
    musicalIdeaIllustrated: 'assure quality of all the things!',
}

const spec: PatternSpec = {
    patternDurationScalar: PERFORMER_QA_PATTERN_DURATION_SCALAR,
    patternPitchScalar: PERFORMER_QA_PATTERN_PITCH_SCALAR,
}

const pattern: Pattern = {
    material,
    metadata,
    patternId: PatternId.PERFORMER_QA,
    spec,
}

export {
    pattern,
    spec,
}
