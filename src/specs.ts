import { PatternSpec, standardInitialPatternSpec, StandardPatternSpecProperties } from '@musical-patterns/pattern'
import { PERFORMER_QA_PATTERN_DURATION_SCALAR, PERFORMER_QA_PATTERN_PITCH_SCALAR } from './constants'

const initialSpec: PatternSpec = {
    ...standardInitialPatternSpec,
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: PERFORMER_QA_PATTERN_DURATION_SCALAR,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: PERFORMER_QA_PATTERN_PITCH_SCALAR,
}

export {
    initialSpec,
}
