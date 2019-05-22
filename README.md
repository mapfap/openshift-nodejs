## Setup

1. Modify openshift/deployment-config.yaml
Change the value of spec.template.spec.containers[0].image to be
image-registry.openshift-image-registry.svc:5000/<<YOUR_NAMESPACE_HERE>>/openshift-nodejs


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