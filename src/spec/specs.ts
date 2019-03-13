import {
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
    StandardSpecs,
} from '@musical-patterns/pattern'
import { PERFORMER_QA_INITIAL_BASE_DURATION, PERFORMER_QA_INITIAL_BASE_FREQUENCY } from './constants'

const initialSpecs: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASE_DURATION ]: PERFORMER_QA_INITIAL_BASE_DURATION,
    [ StandardSpec.BASE_FREQUENCY ]: PERFORMER_QA_INITIAL_BASE_FREQUENCY,
}

const spec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initialSpecs,
}

export {
    spec,
}
