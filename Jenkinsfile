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
        stage('Lint') {
            steps {
                script {
                    echo 'Lintingjj.jhjj..'
                    sh 'npm i  eslint eslint-plugin-react-hooks eslint-plugin-react-refresh'
                    sh 'npm run lint'
                }
            }
        }
    }
    post {
        success {
            script {
                echo 'Linting passeeed. You may now merge.'
                setGitHubPullRequestStatus(
                    state: 'SUCCESS',
                    context: 'ESLINT_CLASS_5_STORE_FRONT',
                    message: 'lint passed',
                )
            }
        }
        failure {
            script {
                echo 'Pipeline failed. Blocking pull request merge.'
                setGitHubPullRequestStatus(
                    state: 'FAILURE',
                    context: 'ESLINT_CLASS_5_STORE_FRONT',
                    message: 'lint failed. Run npm run build to see errors.',
                )
            }
        }
    }
}
