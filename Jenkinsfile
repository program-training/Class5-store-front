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
        stage('client lint') {
            steps {
                script {
                        sh 'echo "linting.."'
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
                    message: 'Build passed',
                )
            }
        }
        failure {
            script {
                echo 'Pipeline failed. Blocking pull request merge.'
                setGitHubPullRequestStatus(
                    state: 'FAILURE',
                    context: 'ESLINT_CLASS_5',
                    message: 'Build failed  run npm run build to see errors',
                )
            }
        }
    }
}
