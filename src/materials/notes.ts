import { NoteSpec } from '@musical-patterns/compiler'
import { DEFAULT_DURATIONS_SCALE_INDEX, DEFAULT_PITCH_SCALE_INDEX } from '@musical-patterns/pattern'
import { apply, to } from '@musical-patterns/utilities'
import { CENTER_BLOCKS_ON_ORIGIN } from './constants'

const buildNoteSpec: (blockElement: number) => NoteSpec =
    (blockElement: number): NoteSpec =>
        ({
            durationSpec: {
                scalar: to.Scalar(blockElement),
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
            pitchSpec: {
                index: to.Index(blockElement),
                scaleIndex: DEFAULT_PITCH_SCALE_INDEX,
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
