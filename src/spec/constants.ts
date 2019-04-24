// tslint:disable no-magic-numbers

import { as, Duration, Hz, Ms, Pitch, Point } from '@musical-patterns/utilities'

const MATERIAL_QA_INITIAL_BASIS_DURATION: Duration = as.Translation<Point<Ms>>(100)
const MATERIAL_QA_INITIAL_BASIS_FREQUENCY: Pitch = as.Point<Hz>(100)

export {
    MATERIAL_QA_INITIAL_BASIS_DURATION,
    MATERIAL_QA_INITIAL_BASIS_FREQUENCY,
}
