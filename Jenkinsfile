pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                script {
                    def pullRequestBranch = env.GITHUB_PR_SOURCE_BRANCH ?: 'main'
                    checkout([$class: 'GitSCM', 
                              branches: [[name: "*/${pullRequestBranch}"]],
                              userRemoteConfigs: [[url: 'https://github.com/program-training/Class5-store-front.git']]])
                }
            }
        }
        stage('Debugging') {
            steps {
                script {
                    // Debugging information
                    sh 'ls -al'  // List files in the current directory
                    sh 'cat .eslintrc.cjs'  // Display the content of .eslintrc.cjs
                }
            }
        }
        stage('Fetch ESLint Config') {
            steps {
                script {
                    // Clean workspace before copying
                    sh 'rm -rf .eslintrc.cjs'
                    
                    // Fetch the .eslintrc.cjs file from the main branch
                    sh 'git fetch origin main:refs/remotes/origin/main'
                    sh 'git checkout origin/main -- .eslintrc.cjs'
                }
            }
        }
        stage('Client Lint') {
            steps {
                script {
                    echo 'Linting...'
                    sh 'npm run lint'
                }
            }
        }
    }
    post {
        success {
            script {
                echo 'Linting passed. You may now merge.'
                setGitHubPullRequestStatus(
                    state: 'SUCCESS',
                    context: 'ESLINT_CLASS_5',
                    message: 'Linting passed',
                )
            }
        }
        failure {
            script {
                echo 'Pipeline failed. Blocking pull request merge.'
                setGitHubPullRequestStatus(
                    state: 'FAILURE',
                    context: 'ESLINT_CLASS_5',
                    message: 'Linting failed. Check ESLint output for details.',
                )
            }
        }
    }
}
