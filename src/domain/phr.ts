// PHR
const phrSchema = new mongoose.Schema({
    isDeleted: {
        type: Boolean,
        default: false
    },
    identifier: {
        use: {
            type: String
        },
        _type: {
            coding: {
                system: {
                    type: String
                },
                version: {
                    type: String
                },
                code: {
                    type: String
                },
                display: {
                    type: String
                },
                userSelected: {
                    type: Boolean
                }
            },
            text: {
                type: String
            }
         },
        system: {
            type: String
        },
        value: {
            type: String
        },
        assigner: {
            type: String
        }
    }, 
    _type: {
            type: String
    },
    timestamp: {
        type: String
    },
    total: {
        type: Number
    },
    link: {
        relation: {
            type: String
        },
        url: {
            type: String
        }
    },
    entry: {
        link: {
            type: String
        },
        fullUrl: {
            type: String
        },
        resource: {
            type: String
        },
        search: {
            mode: {
                type: String
            },
            score: {
                type: Number
            }
        },
        request: {
            method: {
                type: String
            },
            url: {
                type: String
            },
            ifNoneMatch: {
                type: String
            },
            ifModifiedSince: {
                type: String
            },
            ifMatch: {
                type: String
            },
            ifNoneExist: {
                type: String
            }
        },
        response: {
            status: {
                type: String
            },
            location: {
                type: String
            },
            etag: {
                type: String
            },
            lastModified: {
                type: String
            },
            outcome: {
                type: String
            }
        }
    },
    signature: {
        _type: {
            type: Array
        },
        when: {
            instant: {
                type: Date
            }
        },
        who: {
            type: String
        },
        onBehalfOf: {
            type: String
        },
        targetFormat: {
            type: String
        },
        sigFormat: {
            type: String
        },
        data: {
            type: Buffer
        }
    },
    medicationStatement: [medSchema],
    allergyIntolerance: [allergyIntSchema],
    condition: [conditionSchema],
    valueSet: [valueSetSchema],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Patient'
    }
})


// medicationStatement
const medSchema = new mongoose.Schema({
    isDeleted: {
        type: Boolean,
        default: false
    },
    identifier: {
        use: {
            type: String
        },
        _type: {
            coding: {
                system: {
                    type: String
                },
                version: {
                    type: String
                },
                code: {
                    type: String
                },
                display: {
                    type: String
                },
                userSelected: {
                    type: Boolean
                }
            },
            text: {
                type: String
            }
         },
        system: {
            type: String
        },
        value: {
            type: String
        },
        assigner: {
            type: String
        }
    },
    partOf: {
        type: Array
    },
    status: {
        type: String
    },
    statusReason: {
        type: Array
    },
    category: {
        type: String
    },
    medication: {
        medicationCodableConcept: {
            type: String
        },
        reference: {
            type: String
        }
    },
    subject: {
        type: String
    },
    context: {
        type: String
    },
    effective: {
        effectiveDateTime: {
            type: Date
        },
        effectivePeriod: {
            start: {
                type: Date
            },
            end: {
                type: Date
            }
        }
    },
    dateAsserted: {
        type: Date
    },
    informationSource: {
        type: String
    },
    reasonCode: {
        type: Array
    },
    reasonReference: {
        type: Array
    },
    note: {
        author: {
            authorReference: {
                type: String
            },
            authorString: {
                type: String
            }
        },
        time: {
            type: Date
        },
        text: {
            type: String
        }
    },
    dosage: [dosageSchema]
})


// Dosage
const dosageSchema = new mongoose.Schema({
    dosage: {
        sequence: {
            type: Number
        },
        text: {
            type: String
        },
        additionalInstruction: {
            type: Array
        },
        patientInstruction: {
            type: String
        },
        timing: {
            event: {
                type: Date
            },
            code: {
                type: String
            }
        },
        asNeeded: {
            asNeededBoolean: {
                type: Boolean
            },
            asNeededCodeableConcept: {
                type: String
            }
        },
        site: {
            type: String
        },
        route: {
            type: String
        },
        method: {
            type: String
        },
        doseAndRate: {
            _type: {
                type: String
            },
            dose: {
                doseRange: {
                    low: {
                        type: Number
                    },
                    high: {
                        type: Number
                    }
                },
                doseQuantity: {
                    type: Number
                }
            },
            rate: {
                rateRatio: {
                    numerator: {
                        type: Number
                    },
                    denominator: {
                        type: Number
                    }
                },
                rateRange: {
                    low: {
                        type: Number
                    },
                    high: {
                        type: Number
                    }
                },
                rateQuantity: {
                    type: Number
                }
            }
        },
        maxDosePerPeriod: {
            numerator: {
                type: Number
            },
            denominator: {
                type: Number
            }
        },
        maxDosePerAdministration: {
            type: Number
        },
        maxDosePerLifetime: {
            type: Number
        }
    }
})


// allergyIntolerance
const allergyIntSchema = new mongoose.Schema({
    isDeleted: {
        type: Boolean,
        default: false
    },
    identifier: {
        use: {
            type: String
        },
        _type: {
            coding: {
                system: {
                    type: String
                },
                version: {
                    type: String
                },
                code: {
                    type: String
                },
                display: {
                    type: String
                },
                userSelected: {
                    type: Boolean
                }
            },
            text: {
                type: String
            }
         },
        system: {
            type: String
        },
        value: {
            type: String
        },
        assigner: {
            type: String
        }
    },
    clinicalStatus: {
        type: String
    },
    verificationStatus: {
        type: String
    },
    _type: {
        type: String
    },
    category: {
        type: Array
    },
    criticality: {
        type: String
    },
    code: {
        type: String
    },
    patient: {
        type: String
    },
    encounter: {
        type: String
    },
    onset: {
        onsetDateTime: {
            type: Date
        },
        onsetAge: {
            type: Number
        },
        onsetPeriod: {
            start: {
                type: Date
            },
            end: {
                type: Date
            }
        },
        onsetRange: {
            high: {
                type: Number
            },
            low: {
                type: Number
            }
        },
        onsetString: {
            type: String
        }
    },
    recordedDate: {
        type: Date
    },
    recorder: {
        type: String
    },
    asserter: {
        type: String
    },
    lastOccurence: {
        type: Date
    },
    note: {
        author: {
            authorReference: {
                type: String
            },
            authorString: {
                type: String
            }
        },
        time: {
            type: Date
        },
        text: {
            type: String
        }
    },
    reaction: {
        substance: {
            type: String
        },
        manifestation: {
            type: Array
        },
        description: {
            type: String
        },
        onset: {
            type: Date
        },
        severity: {
            type: String
        },
        exposureRouter: {
            type: String
        },
        note: {
            author: {
                authorReference: {
                    type: String
                },
                authorString: {
                    type: String
                }
            },
            time: {
                type: Date
            },
            text: {
                type: String
            }
        }
    }
})


// Condition
const conditionSchema = new mongoose.Schema({
    isDeleted: {
        type: Boolean,
        default: false
    },
    identifier: {
        use: {
            type: String
        },
        _type: {
            coding: {
                system: {
                    type: String
                },
                version: {
                    type: String
                },
                code: {
                    type: String
                },
                display: {
                    type: String
                },
                userSelected: {
                    type: Boolean
                }
            },
            text: {
                type: String
            }
         },
        system: {
            type: String
        },
        value: {
            type: String
        },
        assigner: {
            type: String
        }
    },
    clinicalStatus: {
        type: String
    },
    verificationStatus: {
        type: Array
    },
    category: {
        type: String
    },
    severity: {
        type: String
    },
    code: {
        type: String
    },
    bodySite: {
        type: String
    },
    subject: {
        type: String
    },
    encounter: {
        type: String
    },
    onset: {
        onsetDateTime: {
            type: Date
        },
        onsetAge: {
            type: Number
        },
        onsetPeriod: {
            start: {
                type: Date
            },
            end: {
                type: Date
            }
        },
        onsetRange: {
            high: {
                type: Number
            },
            low: {
                type: Number
            }
        },
        onsetString: {
            type: String
        }
    },
    abatement: {
        abatementDate: {
            type: Date
        },
        abatementAge: {
            type: Number
        },
        abatementPeriod: {
            start: {
                type: Date
            },
            end: {
                type: Date
            }
        },
        abatementRange: {
            high: {
                type: Number
            },
            low: {
                type: Number
            }
        },
        abatementString: {
            type: String
        }
    },
    recordedDate: {
        type: Date
    },
    recorder: {
        type: String
    },
    asserter: {
        type: String
    },
    stage: {
        summary: {
            type: String
        },
        _type: {
            type: String
        },
        asessment: {
            type: String
        }
    },
    evidence: {
        code: {
            type: String
        },
        detail: {
            type: String
        }
    },
    note: {
        author: {
            authorReference: {
                type: String
            },
            authorString: {
                type: String
            }
        },
        time: {
            type: Date
        },
        text: {
            type: String
        }
    }
})

// valueSet
const valueSetSchema = new mongoose.Schema({
    url: {
        type: String
    },
    identifier: {
        use: {
            type: String
        },
        _type: {
            coding: {
                system: {
                    type: String
                },
                version: {
                    type: String
                },
                code: {
                    type: String
                },
                display: {
                    type: String
                },
                userSelected: {
                    type: Boolean
                }
            },
            text: {
                type: String
            }
         },
        system: {
            type: String
        },
        value: {
            type: String
        },
        assigner: {
            type: String
        }
    },
    version: {
        type: String
    },
    name: {
        type: String
    },
    title: {
        type: String
    },
    status: {
        type: String
    },
    experimental: {
        type: Boolean
    },
    date: {
        type: Date
    },
    publisher: {
        type: String
    },
    contact: {
        contactDetail: {
            name: {
                type: String
            },
            telecom: {
                system: {
                    type: String
                },
                value: {
                    type: String
                },
                use: {
                    type: String
                },
                period: {
                    type: String
                }
            }
        }
    },
    description: {
        type: String
    },
    useContext: {
        code: {
            coding: {
                system: {
                    type: String
                },
                version: {
                    type: String
                },
                code: {
                    type: String
                },
                display: {
                    type: String
                },
                userSelected: {
                    type: Boolean
                }
            }
        },
        value: {
            coding: {
                system: {
                    type: String
                },
                version: {
                    type: String
                },
                code: {
                    type: String
                },
                display: {
                    type: String
                },
                userSelected: {
                    type: Boolean
                }
            },
            text: {
                type: String
            }
        }
    },
    jurisdiction: {
        coding: {
            system: {
                type: String
            },
            version: {
                type: String
            },
            code: {
                type: String
            },
            display: {
                type: String
            },
            userSelected: {
                type: Boolean
            }
        },
        text: {
            type: String
        }
    },
    immutable: {
        type: Boolean
    },
    purpose: {
        type: String
    },
    copyright: {
        type: String
    },
    compose: {
        lockedDate: {
            type: Date
        },
        inactive: {
            type: Boolean
        },
        include: {
            system: {
                type: String
            },
            version: {
                type: String
            },
            concept: {
                code: {
                    type: String
                },
                display: {
                    type: String
                }
            },
            designation: {
                language: {
                    type: String
                },
                use: {
                    type: String
                },
                value: {
                    type: String
                }
            },
            filter: {
                property: {
                    type: String
                },
                op: {
                    type: String
                },
                value: {
                    type: String
                }
            },
            valueSet: {
                type: String
            }
        },
        exclude: {
            code: {
                type: String
            }
        }
    },
    expansion: {
        identifier: {
            type: String
        },
        timestamp: {
            type: Date
        },
        total: {
            type: Number
        },
        offset: {
            type: Number
        },
        parameter: {
            name: {
                type: String
            },
            value: {
                type: String
            }
        },
        contains: {
            system: {
                type: String
            },
            abstract: {
                type: Boolean
            },
            inactive: {
                type: Boolean
            },
            version: {
                type: String
            },
            code: {
                type: String
            },
            display: {
                type: String
            },
            designation: {
                language: {
                    type: String
                },
                use: {
                    type: String
                },
                value: {
                    type: String
                }
            },
            contains: {
                type: String
            }
        }
    }
})






