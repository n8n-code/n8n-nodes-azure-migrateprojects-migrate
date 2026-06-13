import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Operations List",
					"value": "Operations List",
					"action": "Get list of operations supported in the API.",
					"description": "Get a list of REST API supported by Microsoft.Migrate provider.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/Microsoft.Migrate/operations"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/Microsoft.Migrate/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Operations List"
					]
				}
			}
		},
];
