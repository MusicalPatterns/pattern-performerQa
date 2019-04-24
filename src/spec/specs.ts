import {
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
    StandardSpecs,
} from '@musical-patterns/spec'
import { MATERIAL_QA_INITIAL_BASIS_DURATION, MATERIAL_QA_INITIAL_BASIS_FREQUENCY } from './constants'

const initialSpecs: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASIS_DURATION ]: MATERIAL_QA_INITIAL_BASIS_DURATION,
    [ StandardSpec.BASIS_FREQUENCY ]: MATERIAL_QA_INITIAL_BASIS_FREQUENCY,
}

const spec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initialSpecs,
}

export {
    spec,
}
