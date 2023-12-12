pipeline {
    agent any
    environment {
        ESLINT_CONFIG_PATH = '.eslintrc.cjs'
    }
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
        stage('Fetch ESLint Config') {
            steps {
                script {
                    // Clean workspace before copying
                    deleteDir()
                    
                    // Fetch the .eslintrc.cjs file from the main branch
                    sh 'git fetch origin main:refs/remotes/origin/main'
                    sh 'git checkout origin/main -- .eslintrc.cjs'
                    
                    // Copy the configuration file to the root directory
                    sh 'cp .eslintrc.cjs .'
                }
            }
        }
        stage('Client Lint') {
            steps {
                script {
                    echo 'Linting...'
                    // Run npm install and linting inside a Node.js Docker container
                    sh 'docker run -v $PWD:/app -w /app node:14 npm install'
                    sh 'docker run -v $PWD:/app -w /app node:14 npm run lint -- --config $ESLINT_CONFIG_PATH'
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
