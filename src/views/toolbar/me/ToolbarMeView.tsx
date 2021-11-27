import { RoomObjectCategory } from '@nitrots/nitro-renderer';
import { FC, useEffect } from 'react';
import { GetRoomEngine, GetRoomSession } from '../../../api';
import { ItemCountView } from '../../shared/item-count/ItemCountView';
import { ToolbarViewItems } from '../ToolbarView.types';
import { ToolbarMeViewProps } from './ToolbarMeView.types';

export const ToolbarMeView: FC<ToolbarMeViewProps> = props =>
{
    const { useGuideTool = false, unseenAchievementCount = 0, handleToolbarItemClick = null } = props;

    useEffect(() =>
    {
        const roomSession = GetRoomSession();

        if(!roomSession) return;

        GetRoomEngine().selectRoomObject(roomSession.roomId, roomSession.ownRoomIndex, RoomObjectCategory.UNIT);
    }, []);

    return (
        <div className="d-flex nitro-toolbar-me px-1 py-2">
            <div className="navigation-items">
                <div className="navigation-item">
                    <i className="icon icon-me-talents"></i>
                </div>
                { useGuideTool && <div className="navigation-item" onClick={ () => handleToolbarItemClick(ToolbarViewItems.GUIDE_TOOL_ITEM) }>
                    <i className="icon icon-me-helper-tool"></i>
                </div> }
                <div className="navigation-item" onClick={ () => handleToolbarItemClick(ToolbarViewItems.ACHIEVEMENTS_ITEM) }>
                    <i className="icon icon-me-achievements"></i>
                    { (unseenAchievementCount > 0) &&
                        <ItemCountView count={ unseenAchievementCount } /> }
                </div>
                <div className="navigation-item" onClick={ () => handleToolbarItemClick(ToolbarViewItems.PROFILE_ITEM) }>
                    <i className="icon icon-me-profile"></i>
                </div>
                <div className="navigation-item">
                    <i className="icon icon-me-rooms"></i>
                </div>
                <div className="navigation-item" onClick={ () => handleToolbarItemClick(ToolbarViewItems.CLOTHING_ITEM) }>
                    <i className="icon icon-me-clothing"></i>
                </div>
                <div className="navigation-item">
                    <i className="icon icon-me-forums"></i>
                </div>
                <div className="navigation-item" onClick={ () => handleToolbarItemClick(ToolbarViewItems.SETTINGS_ITEM) }>
                    <i className="icon icon-me-settings"></i>
                </div>
            </div>
        </div>
    );
}
