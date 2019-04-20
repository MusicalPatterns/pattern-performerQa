// tslint:disable no-magic-numbers

import { as, Block } from '@musical-patterns/utilities'
import { MaterialQaBlocks } from './types'

const computeBlocks: () => MaterialQaBlocks =
    (): MaterialQaBlocks => {
        const oscillator: Block = as.Block([ 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4 ])
        const sample: Block = as.Block([ 7, 1, 6, 8, 1, 7, 3, 4, 2, 1 ])

        return {
            oscillator,
            sample,
        }
    }

const computeDelayBlocks: () => MaterialQaBlocks =
    (): MaterialQaBlocks => {
        const oscillator: Block = as.Block([ 7 ])
        const sample: Block = as.Block([ 7 ])

        return {
            oscillator,
            sample,
        }
    }

export {
    computeBlocks,
    computeDelayBlocks,
}
