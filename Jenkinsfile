pipeline {
    agent any

    tools {nodejs "NodeJs"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git url: "https://github.com/skyboy58568/Cy-test.git"
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-autostore-dashboard'
                    }
                }
                stage('Slave Node2') {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        Git url: "https://github.com/skyboy58568/Cy-test.git"
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-autostore-dashboard'
                    }
                }
            }
        }
    }
}
