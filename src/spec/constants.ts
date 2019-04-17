// tslint:disable no-magic-numbers

import { Hz, Ms, Scalar, to } from '@musical-patterns/utilities'

const MATERIAL_QA_INITIAL_BASE_DURATION: Scalar<Ms> = to.Scalar<Ms>(100)
const MATERIAL_QA_INITIAL_BASE_FREQUENCY: Scalar<Hz> = to.Scalar<Hz>(100)

export {
    MATERIAL_QA_INITIAL_BASE_DURATION,
    MATERIAL_QA_INITIAL_BASE_FREQUENCY,
}
