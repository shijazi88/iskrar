# Deploying to DigitalOcean App Platform

This guide will help you deploy the Istekrar website to DigitalOcean App Platform.

## Prerequisites

1. A [DigitalOcean](https://www.digitalocean.com/) account
2. Your code pushed to a Git repository (GitHub, GitLab, or BitBucket)

## Deployment Steps

### 1. Connect Your Repository

1. Log in to your DigitalOcean account and navigate to the App Platform section
2. Click "Create App" button
3. Select your repository source (GitHub, GitLab, or BitBucket)
4. Authorize DigitalOcean to access your repositories if prompted
5. Select the repository containing this project
6. Choose the branch you want to deploy (usually `main` or `master`)

### 2. Configure Your App

Most of the configuration is already defined in the `.do/app.yaml` file, but you may need to:

1. Select your preferred region
2. Review and adjust the instance size and count
3. Configure environment variables if needed
4. Set up custom domains if you have them

### 3. Deploy

1. Review the configuration
2. Click "Deploy to App Platform" button
3. Wait for the build and deployment process to complete

## Environment Variables

The following environment variables can be configured:

- `NODE_ENV`: Set to `production` for production deployments

## Monitoring and Troubleshooting

After deployment, you can:

- View logs in the DigitalOcean App Platform dashboard
- Set up alerts for resource usage or errors
- Configure auto-scaling settings if needed

## Custom Domain Configuration

To use a custom domain:

1. Go to the "Settings" tab in your app
2. Click "Domains" section
3. Add your domain name
4. Configure DNS records as instructed by DigitalOcean

## Continuous Deployment

App Platform automatically redeploys when changes are pushed to the selected branch.
