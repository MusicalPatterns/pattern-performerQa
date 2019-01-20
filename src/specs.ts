import {
    standardInitialSpec,
    StandardSpec,
    standardSpecAttributes,
    StandardSpecData,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { PERFORMER_QA_PATTERN_DURATION_SCALAR, PERFORMER_QA_PATTERN_PITCH_SCALAR } from './constants'

const initial: StandardSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.PATTERN_DURATION_SCALAR ]: PERFORMER_QA_PATTERN_DURATION_SCALAR,
    [ StandardSpecProperties.PATTERN_PITCH_SCALAR ]: PERFORMER_QA_PATTERN_PITCH_SCALAR,
}

const specData: StandardSpecData = {
    attributes: standardSpecAttributes,
    initial,
}

export {
    specData,
}
