import SolutionsCard from '@/components/solutionsCard'
import React from 'react'
import styles from "./solutions.module.css"

const Solutions = () => {
    return (
        <div className={styles.solutions}>
            <h1 className={styles.header}>Our Superpowered Digital Solutions</h1>
            <div className={styles.cardWrapper}>
                <SolutionsCard title="Level of Authority" text="Branchsight takes care of time-consuming tasks such as account onsuming tasks such as account " />
                <SolutionsCard title="Level of Authority" text="Branchsight takes care of time-consuming tasks such as account onsuming tasks such as account " />
                <SolutionsCard title="Level of Authority" text="Branchsight takes care of time-consuming tasks such as account onsuming tasks such as account " />
            </div>
            <p className={styles.show}>Show More</p>
        </div>
    )
}

export default Solutions