import NameHeader from "./NameHeader.tsx";
import ImageBox from "./ImageBox.tsx";
import CharacterInfo from "./CharacterInfo.tsx";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";


export interface Character {
    id: string
    type: string
    attributes: {
        name: string
        alias_names: string[]
        born: string | null
        died: string | null
        house: string | null
        image: string | null
        gender: string | null
    }
}


const Card = (props: { char: Character, innerRef?: ((node: HTMLElement | null) => void) | undefined, className?: string }) => {
    const charAttrs = props.char.attributes
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 })
    const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 })

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])


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
        <motion.div ref={props.innerRef ? props.innerRef : null} style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
        }} className={`m-2 relative w-60 min-h-[10rem] h-max-[12rem] bg-gradient-to-br from-slate-600 to-slate-700 border-black shadow-xl rounded-2xl gap-4 p-4 flex flex-col items-center ${props.className ? props.className : ''} `} onMouseMove={handleMouseMove}>
            <div style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d"
            }} className="w-60 min-h-[10rem] h-max-[12rem] bg-gradient-to-br from-hpSecondaryColor to-slate-700 border-black shadow-xl rounded-2xl gap-4 p-4 flex flex-col m-0 items-center ${props.className ? props.className : ''} `}">
                <NameHeader name={charAttrs.name} id={props.char.id} />
                <ImageBox src={charAttrs.image ? charAttrs.image : undefined} />
                <CharacterInfo char={props.char} />
            </div>


        </motion.div>
    )
}

export default Card