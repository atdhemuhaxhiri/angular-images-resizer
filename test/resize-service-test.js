/**
 * Created by berthelot on 05/11/14.
 */
'use strict';
describe('[resize] resize-service', function() {
    var service;

    beforeEach(module('resize'));
    beforeEach(inject(function($injector) {
        service = $injector.get('resizeService');
    }));

    describe('halfSize', function() {
        it('should return canvas half sized', function() {
            var canvas = document.createElement('canvas');
            canvas.width = 1000;
            canvas.height = 1000;
            canvas = service.halfSize(canvas);
            expect(canvas.width).to.equal(500);
            expect(canvas.width).to.equal(500);
            canvas = service.halfSize(canvas);
            expect(canvas.width).to.equal(250);
            expect(canvas.width).to.equal(250);
        });
    });

    describe('resize', function() {
       it('should return a base64 image with an jpg image in entry', function() {
           var img = new Image();

           img.onload = function() {
               var data = service.resize(img);
               expect(data).to.be.not.null;
               expect(data.indexOf('data:image/jpeg;base64')).to.be.isGreaterThanOrEqualTo(0);
           };

           img.src = 'fixture/img.jpg';
       });
    });
});