import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from '@material-ui/core'
import virus from '../../assets/virus.png'


const useStyles = makeStyles(({spacing})=> ({
    container: {
        display:"flex",
        justifyContent:"start",
        alignItems:'center',
        margin: '2px 10vw 2px'
    },
    medium:{
        height: spacing(7),
        width: spacing(7),
        marginRight: spacing(2)
    },
    title:{
        display:'flex',
        flexDirection:'column',
        textAlign:'start'
    }
}))

export default function Header(){
    const styled = useStyles()

    return(
        <div className={styled.container}>
            <Avatar src={virus} className={styled.medium}/>
            <div className={styled.title}>
            <span style={{ fontSize:30}}>CORONA VIRUS</span>
            <span style={{ color: '#8c8c8c'}}> Indonesia</span>
            </div>
        </div>
    )
}