## Prerequisite

1. Having an Openshift cluster ready.
2. Create a new namespace.
3. Install oc cli on your machine

## Setup

1. On the [openshift/deployment-config.yaml](https://github.com/mapfap/openshift-nodejs/blob/master/openshift/deployment-config.yaml), change value of spec.template.spec.containers[0].image to be
```
image-registry.openshift-image-registry.svc:5000/<<YOUR_NAMESPACE_HERE>>/openshift-nodejs
````

2. Apply Openshift resources with following commands in order.
```bash
$ oc apply -f openshift/image-stream.yaml
$ oc apply -f openshift/build-config.yaml
$ oc apply -f openshift/deployment-config.yaml
$ oc apply -f openshift/service.yaml
$ oc apply -f openshift/route.yaml
```

3. Start new build
```bash
oc start-build openshift-nodejs
```

4. Start rollout new deployment
```bash
oc rollout latest openshift-nodejs
```

5. Display the URL of the service
```bash
oc get routes openshift-nodejs
```
