import {
    standardInitialPatternSpec,
    StandardPatternSpec,
    standardPatternSpecAttributes,
    StandardPatternSpecData,
    StandardPatternSpecProperties,
} from '@musical-patterns/pattern'
import { PERFORMER_QA_PATTERN_DURATION_SCALAR, PERFORMER_QA_PATTERN_PITCH_SCALAR } from './constants'

const initial: StandardPatternSpec = {
    ...standardInitialPatternSpec,
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: PERFORMER_QA_PATTERN_DURATION_SCALAR,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: PERFORMER_QA_PATTERN_PITCH_SCALAR,
}

const specData: StandardPatternSpecData = {
    attributes: standardPatternSpecAttributes,
    initial,
}

export {
    specData,
}
