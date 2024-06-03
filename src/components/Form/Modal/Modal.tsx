import { FC } from 'react'
import { Backdrop, Modal as ModalMui, Portal, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SuccessImg from '../../../assets/svg/success.svg'
import { useDevice } from '../../../hooks/useDevice'
import { ROUTES } from '../../../Routes'
import { Button } from '../../ui/Button/Button'
import styles from './Modal.module.scss'

interface ModalProps {
    isModalOpen: boolean
    toggleModal: () => void
}

export const Modal: FC<ModalProps> = ({ isModalOpen, toggleModal }) => {
    const { isMobile } = useDevice()
    const navigator = useNavigate()

    const buttonClickHandler = () => {
        toggleModal()
        navigator(`${ROUTES.HOME}#home`)
    }

    return (
        <Portal>
            <Backdrop open={isModalOpen} onClick={toggleModal} sx={{ zIndex: 10 }} />
            <ModalMui
                open={isModalOpen}
                onClose={toggleModal}
                aria-labelledby='modal-title'
                aria-describedby='modal-description'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        width: isMobile ? '90%' : '600px',
                        paddingTop: '30px',
                        height: '500px',
                        backgroundColor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: '20px',
                        boxShadow: '2px 2px 10px #fcd400, -2px -2px 10px #fcd400 ',
                        borderRadius: '8px',
                        border: '4px solid #fcd400'
                    }}
                >
                    <h2 className={styles.modal_title} id='modal-title'>
                        Form submitted successfully
                    </h2>
                    <img className={styles.modal_img} src={SuccessImg} alt='Check mark' />
                    <Button onClick={buttonClickHandler} width='medium'>
                        Return to Home
                    </Button>
                </Box>
            </ModalMui>
        </Portal>
    )
}
