import {AppItemContainer,AppImg,AppName} from './styled'

const AppItem =(props)=>{

    const {eachApp}=props 
    const {appName,imageUrl}=eachApp 

    return(
        <AppItemContainer>
            <AppImg src={imageUrl} alt={appName}/>
            <AppName>{appName}</AppName>
        </AppItemContainer>
    )

}

export default AppItem