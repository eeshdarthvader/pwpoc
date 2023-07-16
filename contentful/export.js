module.exports = {
	contentTypes: [
		{
			name: 'Product Selector Broker',
			description: 'Product Selector Broker',
			displayField: 'title',
			fields: [
				{
					id: 'title',
					name: 'Title (internal use only)',
					type: 'Symbol',
					localized: false,
					required: true,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'salesforceOnboardingCampaign',
					name: 'Salesforce Onboarding Campaign',
					type: 'Symbol',
					localized: false,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'emailPlaceholderText',
					name: 'Email Placeholder Text',
					type: 'Symbol',
					localized: true,
					required: true,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'invalidEmailText',
					name: 'Invalid Email Text',
					type: 'Symbol',
					localized: true,
					required: true,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'unknownErrorText',
					name: 'Unknown Error Text',
					type: 'Symbol',
					localized: true,
					required: true,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'hintText',
					name: 'Hint Text',
					type: 'Text',
					localized: true,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'submitButtonText',
					name: 'Submit Button Text',
					type: 'Symbol',
					localized: true,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'theme',
					name: 'Theme',
					type: 'Symbol',
					localized: false,
					required: false,
					validations: [
						{
							in: ['Green', 'Dark']
						}
					],
					disabled: false,
					omitted: false
				},
				{
					id: 'deviceSpecificViews',
					name: 'Device Specific View(s)',
					type: 'Link',
					localized: false,
					required: false,
					validations: [
						{
							linkContentType: ['viewMode']
						}
					],
					disabled: false,
					omitted: false,
					linkType: 'Entry'
				},
				{
					id: 'disabledLocales',
					name: 'Disabled Locales',
					type: 'Array',
					localized: false,
					required: false,
					validations: [],
					disabled: false,
					omitted: false,
					items: {
						type: 'Symbol',
						validations: [
							{
								in: [
									'de-DE',
									'en-DE',
									'de-AT',
									'en-AT',
									'it-IT',
									'en-IT',
									'fr-FR',
									'en-FR',
									'es-ES',
									'en-ES',
									'nl-NL',
									'en-NL'
								]
							}
						]
					}
				}
			],
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: 'kcbf79ije7q7'
					}
				},
				id: 'productSelectorBroker',
				type: 'ContentType',
				environment: {
					sys: {
						id: 'master',
						type: 'Link',
						linkType: 'Environment'
					}
				}
			}
		},
		{
			name: 'Product Selector - LT, DE, AT',
			description: '',
			displayField: 'titleInternalUseOnly',
			fields: [
				{
					id: 'titleInternalUseOnly',
					name: 'Title (internal use only)',
					type: 'Symbol',
					localized: false,
					required: true,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'emailPlaceholderText',
					name: 'Email Placeholder Text',
					type: 'Symbol',
					localized: true,
					required: true,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'invalidEmailText',
					name: 'Invalid Email Text',
					type: 'Symbol',
					localized: true,
					required: true,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'existingUserText',
					name: 'Existing User text',
					type: 'Symbol',
					localized: true,
					required: true,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'unknownErrorText',
					name: 'Unknown Error text',
					type: 'Symbol',
					localized: true,
					required: true,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'hintText',
					name: 'Hint Text',
					type: 'Text',
					localized: true,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'submitButtonText',
					name: 'Submit Button Text',
					type: 'Symbol',
					localized: true,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'submitAction',
					name: 'Submit action',
					type: 'Symbol',
					localized: true,
					required: false,
					validations: [
						{
							in: [
								'Launch DE onboarding',
								'Launch AT onboarding',
								'Launch LT onboarding',
								'Launch CH onboarding',
								'Show partner selection modal'
							]
						}
					],
					disabled: false,
					omitted: false
				},
				{
					id: 'theme',
					name: 'Theme',
					type: 'Symbol',
					localized: false,
					required: false,
					validations: [
						{
							in: ['Green', 'Dark']
						}
					],
					disabled: false,
					omitted: false
				},
				{
					id: 'notIngCustomerText',
					name: 'Not ING Customer Text',
					type: 'Symbol',
					localized: true,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'continueAsScalableCustomerText',
					name: 'Continue as Scalable Customer Text',
					type: 'Symbol',
					localized: true,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'preOnboardingPage',
					name: 'Pre-Onboarding Page',
					type: 'Link',
					localized: false,
					required: false,
					validations: [
						{
							linkContentType: ['page']
						}
					],
					disabled: false,
					omitted: false,
					linkType: 'Entry'
				},
				{
					id: 'modalHeadingText',
					name: 'Modal Heading text - SCA',
					type: 'Text',
					localized: true,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'modalHeadingTextIng',
					name: 'Modal Heading text - ING',
					type: 'Text',
					localized: true,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'modalNotIngCustomerButtonLabel',
					name: 'Modal - SCA Customer button label',
					type: 'Symbol',
					localized: true,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'modalIngCustomerButtonLabel',
					name: 'Modal - ING Customer button label',
					type: 'Symbol',
					localized: true,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'modalInfoText',
					name: 'Modal - Info text',
					type: 'Text',
					localized: false,
					required: false,
					validations: [],
					disabled: true,
					omitted: true
				},
				{
					id: 'campaignMode',
					name: 'Campaign Mode',
					type: 'Boolean',
					localized: false,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'ingDescription',
					name: 'ING Description',
					type: 'Symbol',
					localized: true,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'ingLinkLabel',
					name: 'ING Link Label',
					type: 'Symbol',
					localized: true,
					required: false,
					validations: [],
					disabled: false,
					omitted: false
				},
				{
					id: 'deviceSpecificViews',
					name: 'Device Specific View(s)',
					type: 'Link',
					localized: false,
					required: false,
					validations: [
						{
							linkContentType: ['viewMode']
						}
					],
					disabled: false,
					omitted: false,
					linkType: 'Entry'
				},
				{
					id: 'disabledLocales',
					name: 'Disabled Locales',
					type: 'Array',
					localized: false,
					required: false,
					validations: [],
					disabled: false,
					omitted: false,
					items: {
						type: 'Symbol',
						validations: [
							{
								in: [
									'de-DE',
									'en-DE',
									'de-AT',
									'en-AT',
									'it-IT',
									'en-IT',
									'fr-FR',
									'en-FR',
									'es-ES',
									'en-ES',
									'nl-NL',
									'en-NL'
								]
							}
						]
					}
				}
			],
			sys: {
				space: {
					sys: {
						type: 'Link',
						linkType: 'Space',
						id: 'kcbf79ije7q7'
					}
				},
				id: 'productSelectorIng',
				type: 'ContentType',
				environment: {
					sys: {
						id: 'master',
						type: 'Link',
						linkType: 'Environment'
					}
				}
			}
		}
	]
};
