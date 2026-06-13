import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AzureMigrateprojectsMigrate implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Migrateprojects Migrate',
                name: 'N8nDevAzureMigrateprojectsMigrate',
                icon: { light: 'file:./azure-migrateprojects-migrate.png', dark: 'file:./azure-migrateprojects-migrate.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Migrate workloads to Azure.',
                defaults: { name: 'Azure Migrateprojects Migrate' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureMigrateprojectsMigrateApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
                ],
        };
}
