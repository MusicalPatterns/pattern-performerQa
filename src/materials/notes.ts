import { NoteSpec } from '@musical-patterns/compiler'
import { apply, to } from '@musical-patterns/utilities'
import { DEFAULT_DURATIONS_SCALE_INDEX, DEFAULT_PITCH_SCALE_INDEX } from '@musical-patterns/utilities-pattern'
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
