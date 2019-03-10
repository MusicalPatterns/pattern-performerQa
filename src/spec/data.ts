import {
    standardAttributes,
    StandardData,
    standardInitialSpec,
    StandardProperty,
    StandardSpec,
} from '@musical-patterns/pattern'
import { PERFORMER_QA_INITIAL_BASE_DURATION, PERFORMER_QA_INITIAL_BASE_FREQUENCY } from './constants'

const initial: StandardSpec = {
    ...standardInitialSpec,
    [ StandardProperty.BASE_DURATION ]: PERFORMER_QA_INITIAL_BASE_DURATION,
    [ StandardProperty.BASE_FREQUENCY ]: PERFORMER_QA_INITIAL_BASE_FREQUENCY,
}

const data: StandardData = {
    attributes: standardAttributes,
    initial,
}

export {
    data,
}
