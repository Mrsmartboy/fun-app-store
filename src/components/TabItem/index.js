import {TabItemContainer,TabButton} from './styled'

const TabItem =(props)=>{
    const {eachTab,onTabItem,isActive}= props 
    const {tabId,displayText}=eachTab

    const onClickTabItem=()=>{
        onTabItem(tabId)
    }

    

    return(
        <TabItemContainer onClick={onClickTabItem} >
            <TabButton isActive={isActive}>{displayText}</TabButton>
        </TabItemContainer>
    )

}

export default TabItem