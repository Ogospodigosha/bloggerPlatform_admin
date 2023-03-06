import * as React from 'react'
import {ReactNode} from 'react'

import {CssBaseline, IconButton} from '@mui/material'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close';


import s from './BasicModal.module.css'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 378,
    p: 4,
}

type PropsType = {
    children?: ReactNode
    setOpenModal: (openModal: boolean)=>void
    openModal: boolean
    title: string
}
export const BasicModal: React.FC<PropsType> = ({ setOpenModal, openModal, children, title}) => {
    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <Modal open={openModal} onClose={handleClose} >
            <div className={s.main} style={{width: title !== 'Delete a post' ? '526px': '395px'}}>
                <div className={s.header}>
                    <div className={s.title}>{title}</div>
                    <IconButton onClick={handleClose}>
                      <CloseIcon />
                    </IconButton>
                </div>
                <div className={s.body}>{children}</div>
            </div>
        </Modal>
    )
}
