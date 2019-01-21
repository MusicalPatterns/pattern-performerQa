import {
    standardInitialSpec,
    StandardSpec,
    standardSpecAttributes,
    StandardSpecData,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { PERFORMER_QA_BASE_DURATION, PERFORMER_QA_BASE_FREQUENCY } from './constants'

const initial: StandardSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.BASE_DURATION ]: PERFORMER_QA_BASE_DURATION,
    [ StandardSpecProperties.BASE_FREQUENCY ]: PERFORMER_QA_BASE_FREQUENCY,
}

const specData: StandardSpecData = {
    attributes: standardSpecAttributes,
    initial,
}

export {
    specData,
}
