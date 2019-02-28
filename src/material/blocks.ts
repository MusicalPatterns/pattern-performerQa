// tslint:disable no-magic-numbers

import { Block, to } from '@musical-patterns/utilities'
import { PerformerQaBlocks } from './types'

const buildBlocks: () => PerformerQaBlocks =
    (): PerformerQaBlocks => {
        const oscillator: Block = to.Block([ 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4 ])
        const sample: Block = to.Block([ 7, 1, 6, 8, 1, 7, 3, 4, 2, 1 ])

        return {
            oscillator,
            sample,
        }
    }

export {
    buildBlocks,
}
