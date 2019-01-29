import { NoteSpec } from '@musical-patterns/compiler'
import { STANDARD_DURATIONS_SCALE_INDEX, STANDARD_PITCH_SCALE_INDEX } from '@musical-patterns/pattern'
import { apply, to } from '@musical-patterns/utilities'
import { CENTER_BLOCKS_ON_ORIGIN } from './constants'

const buildNoteSpec: (blockElement: number) => NoteSpec =
    (blockElement: number): NoteSpec =>
        ({
            durationSpec: {
                scalar: to.Scalar(blockElement),
                scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
            },
            pitchSpec: {
                index: to.Index(blockElement),
                scaleIndex: STANDARD_PITCH_SCALE_INDEX,
            },
            positionSpec: [
                {
                    scalar: to.Scalar(apply.Offset(blockElement, CENTER_BLOCKS_ON_ORIGIN)),
                },
                {
                    scalar: to.Scalar(apply.Offset(blockElement, CENTER_BLOCKS_ON_ORIGIN)),
                },
                {
                    scalar: to.Scalar(apply.Offset(blockElement, CENTER_BLOCKS_ON_ORIGIN)),
                },
            ],
        })

export {
    buildNoteSpec,
}
