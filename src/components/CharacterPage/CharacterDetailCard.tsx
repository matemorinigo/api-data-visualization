import { CharacterProps } from '../../Pages/CharacterPage'
import BasicInfo from './BasicInfo'
import DetailedInfo from './DetailedInfo'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const CharacterDetailCard = (props: { data: CharacterProps }) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 })
    const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 })

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10.5deg", "-10.5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["10.5deg", "-10.5deg"])


    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect()
        const w = rect.width
        const h = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = (mouseX / w) - 0.5
        const yPct = (mouseY / h) - 0.5

        x.set(-xPct);
        y.set(yPct);
    }


    return (
        <>
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="bg-gradient-to-br from-slate-600 to-slate-800 mx-4 mt-auto md:mx-36 rounded-lg p-2"
                onMouseMove={handleMouseMove}
            >
                <div
                    style={{ transform: "translateZ(75px)", transformStyle: "flat" }}
                    className="bg-gradient-to-br from-hpSecondaryColor to-slate-700 flex flex-col md:flex-row w-full h-full mx-auto rounded-xl p-5"
                >
                    <BasicInfo char={props.data} />
                    <DetailedInfo char={props.data} />
                </div>
            </motion.div>
        </>
    )
}

export default CharacterDetailCard