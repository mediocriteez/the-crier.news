import React from "react"
import Feed from "../Feed"
import css from './index.module.css'
import LineBreak from "../LineBreak"

const GroupFeed = ({articleData}) => {
    const groupKeys = Object.keys(articleData)
    return(
        <div className={css.root}>
            {
                groupKeys?.map?.(
                    g => {
                        return(
                            <div className={css.root} key={g}>
                                <div className={css.titleContainer}>
                                    <h2 className={css.title}>{g}</h2>
                                    <LineBreak />
                                </div>
                                <Feed articleData={articleData[g]} />
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default GroupFeed