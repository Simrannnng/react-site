import React from 'react'
import StepperComponent from './stepper'
import JobDetails from './jobDetails'
import Layout from '../../Layout/index'

function JobFormPage() {
  return (
    <Layout>
      <StepperComponent />
      <JobDetails />
    </Layout>
  )
}

export default JobFormPage
