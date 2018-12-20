import { NoteSpec } from '@musical-patterns/compiler'
import {
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
    DEFAULT_PITCH_SCALE_INDEX,
} from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'

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
            sustainSpec: {
                offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
                scalar: to.Scalar(blockElement),
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
        })

export {
    buildNoteSpec,
}
