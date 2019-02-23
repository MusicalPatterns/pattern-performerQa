// tslint:disable no-magic-numbers

import { Hz, Ms, Scalar, to } from '@musical-patterns/utilities'

const PERFORMER_QA_INITIAL_BASE_DURATION: Scalar<Ms> = to.Scalar(to.Ms(100))
const PERFORMER_QA_INITIAL_BASE_FREQUENCY: Scalar<Hz> = to.Scalar(to.Hz(100))

export {
    PERFORMER_QA_INITIAL_BASE_DURATION,
    PERFORMER_QA_INITIAL_BASE_FREQUENCY,
}
